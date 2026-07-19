/**
 * Converte valores RGB para o modelo HSL
 */
export function rgbToHsl({ r, g, b }) {
  let rNorm = r / 255, gNorm = g / 255, bNorm = b / 255;
  let max = Math.max(rNorm, gNorm, bNorm), min = Math.min(rNorm, gNorm, bNorm);
  let h, s, l = (max + min) / 2;

  if (max === min) { 
    h = s = 0; 
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === rNorm) h = (gNorm - bNorm) / d + (gNorm < bNorm ? 6 : 0);
    else if (max === gNorm) h = (bNorm - rNorm) / d + 2;
    else if (max === bNorm) h = (rNorm - gNorm) / d + 4;
    h /= 6;
  }
  return { 
    h: Math.round(h * 360), 
    s: Math.round(s * 100), 
    l: Math.round(l * 100) 
  };
}

/**
 * Converte valores HSL para o modelo RGB
 */
export function hslToRgb({ h, s, l }) {
  let hNorm = h / 360, sNorm = s / 100, lNorm = l / 100;
  let r, g, b;

  if (sNorm === 0) { 
    r = g = b = lNorm; 
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1; 
      if (t > 1) t -= 1;
      if (t < 1/6) return p + (q - p) * 6 * t;
      if (t < 1/2) return q;
      if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
      return p;
    };
    let q = lNorm < 0.5 ? lNorm * (1 + sNorm) : lNorm + sNorm - lNorm * sNorm;
    let p = 2 * lNorm - q;
    r = hue2rgb(p, q, hNorm + 1/3); 
    g = hue2rgb(p, q, hNorm); 
    b = hue2rgb(p, q, hNorm - 1/3);
  }
  return { 
    r: Math.round(r * 255), 
    g: Math.round(g * 255), 
    b: Math.round(b * 255) 
  };
}
