import React from "react"

import GalleryCard from "./GalleryCard";
const Gallery = () => {

    return (
        <div class="album py-5 bg-body-tertiary">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div class="col">
                        <GalleryCard></GalleryCard>
                    </div>
                    <div class="col">
                        <GalleryCard></GalleryCard>
                    </div>
                    <div class="col">
                        <GalleryCard></GalleryCard>
                    </div>
                    <div class="col">
                        <GalleryCard></GalleryCard>
                    </div>
                    <div class="col">
                        <GalleryCard></GalleryCard>
                    </div>
                    <div class="col">
                        <GalleryCard></GalleryCard>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Gallery;