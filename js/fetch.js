// URL of the XML document
const xmlUrl = 'https://binauralsubliminal.com/album_01/getrssfeed.php';
//const audioPlayer = document.getElementById('audio-player');
let audioList = [];
let imageList = [];
let titleList = [];
let titleDescription = [];

// fetch feed
function fetchRSSFeed() {
  // Fetch the XML document
  fetch(xmlUrl)
    .then(response => response.text())
    .then(data => {
      // Parse the XML document
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(data, 'text/xml');
      
      const channel = xmlDoc.querySelector('channel');
      const channelTitle = channel.querySelector('title').textContent;
      const channelDescription = channel.querySelector('description').textContent;
      const channelLink = channel.querySelector('link').textContent;
      
      console.log(channelTitle);
      console.log(channelDescription);
      console.log(channelLink);
      
      //const images = xmlDoc.querySelectorAll('image');
      const items = xmlDoc.querySelectorAll('item');
      const images = xmlDoc.querySelectorAll('image');
      
      for (i = 0; i < items.length && images.length; i++) {
        
        const image = images[i];
        const item = items[i];
        
        const imageUrl = image.querySelector('url').textContent;

        const itemTitle = item.querySelector('title').textContent;
        const itemDesription = item.querySelector('description').textContent;
        const itemEnclosure = item.querySelector('enclosure').getAttribute('url'); 
        
        imageList.push(imageUrl);
        titleList.push(itemTitle);
        titleDescription.push(itemDesription);
        audioList.push(itemEnclosure);

      }
      console.log(`fetched: ${audioList}`);
      console.log(`image url: ${imageList}`);
      console.log(`item title: ${titleList}`);
      console.log(`item description: ${titleDescription}`);      
  }).catch(error => {
      console.error('Error fetching or parsing XML:', error);
      console.log(error);
    });
}
fetchRSSFeed();
