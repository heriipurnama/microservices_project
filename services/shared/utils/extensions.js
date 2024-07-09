const path = require('path');

const ExtensionPDF = '.pdf';
const ExtensionJPG = '.jpg';
const ExtensionJPEG = '.jpeg';
const ExtensionPNG = '.png';

function isPDF(filename) {
  const extension = path.extname(filename).toLowerCase();
  return extension === ExtensionPDF;
}

function isAllowedImageFileFormats(filename) {
  const extension = path.extname(filename).toLowerCase();
  switch (extension) {
    case ExtensionJPG:
    case ExtensionJPEG:
    case ExtensionPNG:
      return true;
    default:
      return false;
  }
}

module.exports = { isPDF, isAllowedImageFileFormats };
