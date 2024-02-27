const getCroppedImage = (url: string): string => {
	if (!url) return "https://placehold.co/600x400";

	const target: string = "media/";
	const index: number = url.indexOf(target) + target.length;
	return url.slice(0, index) + "crop/600/400/" + url.slice(index);
}

export default getCroppedImage;