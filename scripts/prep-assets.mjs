// One-off helper: derives logo/favicon files from scripts/logo-source.webp
// and builds a contact sheet of photos for review.
import sharp from 'sharp';
import fs from 'node:fs';
const src = 'scripts/logo-source.webp';
// white -> transparent: alpha from distance to white
const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
for (let i = 0; i < data.length; i += 4) {
  const m = Math.min(data[i], data[i + 1], data[i + 2]);
  const a = 255 - m; // 0 for pure white
  // un-premultiply against white so edges keep their true colour
  if (a > 0) {
    for (let c = 0; c < 3; c++) data[i + c] = Math.max(0, Math.min(255, Math.round(255 - (255 - data[i + c]) * 255 / Math.max(a, 1) * (Math.max(a,1) / 255) )));
  }
  data[i + 3] = a < 12 ? 0 : Math.min(255, Math.round(a * 1.6));
}
const cut = sharp(data, { raw: info }).png();
const trimmed = await sharp(await cut.toBuffer()).trim().toBuffer();
await sharp(trimmed).resize({ height: 256 }).png().toFile('src/assets/logo-mark.png');
await sharp(trimmed).resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } }).extend({ top: 38, bottom: 38, left: 38, right: 38, background: { r: 255, g: 255, b: 255, alpha: 0 } }).png().toFile('public/favicon.png');
await sharp(src).resize(1200, 630, { fit: 'contain', background: '#ffffff' }).jpeg({ quality: 85 }).toFile('public/og-image.jpg');
if (fs.existsSync('src/assets/photos')) {
  const files = fs.readdirSync('src/assets/photos').filter(f => f.endsWith('.jpg')).sort((a, b) => parseInt(a.slice(1)) - parseInt(b.slice(1)));
  const comps = await Promise.all(files.map(async (f, i) => ({ input: await sharp('src/assets/photos/' + f).resize(300, 200).toBuffer(), left: (i % 4) * 300, top: Math.floor(i / 4) * 200 })));
  await sharp({ create: { width: 1200, height: Math.ceil(files.length / 4) * 200, channels: 3, background: '#fff' } }).composite(comps).jpeg({ quality: 70 }).toFile(process.argv[2] || 'sheet.jpg');
}
const ic = ['sharepoint.svg','teams.svg','powerapps.svg','powerautomate.svg','powerbi.svg','azure.png','dotnet.svg','m365.png','dataverse.svg','powerplatform.svg','entra.svg','copilotstudio.svg'];
const icomps = await Promise.all(ic.map(async (f, i) => ({ input: await sharp('src/assets/icons/' + f, { density: 200 }).resize(90, 90, { fit: 'contain', background: '#ffffff' }).flatten({ background: '#ffffff' }).png().toBuffer(), left: i * 100 + 5, top: 5 })));
icomps.push({ input: await sharp('src/assets/logo-mark.png').resize({ height: 90 }).toBuffer(), left: 5, top: 105 });
await sharp({ create: { width: 1200, height: 200, channels: 3, background: '#1b2a4a' } }).composite(icomps).jpeg().toFile(process.argv[3] || 'icons.jpg');
