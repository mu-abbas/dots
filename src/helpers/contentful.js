export default async function getPosts() {
  // get data from contentful through firebase functions
  const postsRes = await fetch('https://us-central1-dots-presentations.cloudfunctions.net/getPosts');

  const data = await postsRes.json();
  if (!data?.items?.length) return [];

  const {
    includes: { Asset },
    items,
  } = data;

  //create a ready to use posts object
  const posts = items.map(post => {
    // get data from the response
    const { title, metaDescription, coverImage, date, duration, imageSlider, isFeatured, postContent, themeColor } =
      post.fields;

    //get cover image url
    const imageURL = getCoverImageURL(Asset, coverImage);

    //get slides urls
    const slidesURLS = getSliderImagesURLS(Asset, imageSlider);

    // create the object
    return {
      title,
      metaDescription,
      duration: `${duration} minutes`,
      isFeatured,
      postContent,
      themeColor,
      date: formatDate(date),
      imageURL,
      slidesURLS,
      href: generateHref(title),
    };
  });

  return posts;
}

//format data to January 14, 2024 function
function formatDate(dateString) {
  const date = new Date(dateString);

  if (isNaN(date.getTime())) {
    return 'Invalid date format';
  }

  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Intl.DateTimeFormat('en-US', options).format(date);
}

// get coverImage url function
function getCoverImageURL(Asset, coverImage) {
  const [imageObject] = Asset.filter(ass => ass.sys.id === coverImage.sys.id);
  return `https:${imageObject.fields.file.url}`;
}

// get slider images URLS function
function getSliderImagesURLS(Asset, imageSlider = []) {
  if (!imageSlider.length) return [];
  const sliderImagesIds = imageSlider.map(image => image.sys.id);
  const sliderImagesObjects = Asset.filter(ass => sliderImagesIds.includes(ass.sys.id));
  return sliderImagesObjects.map(obj => `https:${obj.fields.file.url}`);
}

// generating href from the title function
function generateHref(title) {
  return title.split(' ').join('-').toLowerCase();
}
