
export default function getAllImages() {
    let images = {};
    const r = require.context('./images', false, /\.(png|jpe?g|svg)$/)
    r.keys().map((item, index) => { images[item.replace('./', '')] = (r(item)) })
    console.log(images)
    
    return images

  }
  