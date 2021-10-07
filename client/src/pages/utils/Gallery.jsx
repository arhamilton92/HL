/** @format */

import { ProGallery } from 'pro-gallery';
import 'pro-gallery/dist/statics/main.css';

export function renderGallery(itemList) {

	const items = itemList
	
	// The options of the gallery (from the playground current state)
	const options = {
		galleryLayout: -1,
		gallerySize: 15,
		galleryMargin: 35,
	};

	// The size of the gallery container. The images will fit themselves in it
	const container = {
		width: (window.innerWidth * .80),
		height: (window.innerHeight * .80),
	};

	// The eventsListener will notify you anytime something has happened in the gallery.
	const eventsListener = (eventName, eventData) =>
		console.log({ eventName, eventData });

	// The scrollingElement is usually the window, if you are scrolling inside another element, suplly it here
	const scrollingElement = window;
	return (
		<ProGallery
			items={items}
			options={options}
			container={container}
			eventsListener={eventsListener}
			scrollingElement={scrollingElement}
		/>
	);
}

// Enjoy using your new gallery!
// For more options, visit https://github.com/wix/pro-gallery
