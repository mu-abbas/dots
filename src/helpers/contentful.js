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
  const posts = items
    .sort((a, b) => {
      // sorting articles by date
      return new Date(b?.fields?.date) - new Date(a?.fields?.date);
    })
    .map(post => {
      // get data from the response
      const { title, metaDescription, coverImage, date, duration, imageSlider, isFeatured, postContent, themeColor } =
        post.fields;

      // create the object
      return {
        title: title.trim(),
        metaDescription,
        duration: `${duration} minutes`,
        isFeatured,
        postContent,
        themeColor,
        date: formatDate(date),
        imageURL: getMediaURL(Asset, coverImage),
        slidesURLS: imageSlider?.map(image => getMediaURL(Asset, image)) || [],
        href: generateHref(title),
      };
    });

  return { posts, Asset };
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

// generating href from the title function
function generateHref(title) {
  return title
    .replace(/[^a-zA-Z0-9\s]/g, '')
    .trim()
    .split(' ')
    .join('-')
    .toLowerCase();
}

export function getMediaURL(Asset, image) {
  const [imageObject] = Asset.filter(ass => ass.sys.id === image.sys.id);
  return `https:${imageObject.fields.file.url}`;
}

export function getMediaDescription(Asset, image) {
  const [imageObject] = Asset.filter(ass => ass.sys.id === image.sys.id);
  return imageObject.fields.description;
}
