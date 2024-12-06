import React from "react"

import Card from "./Card";
const Gallery = () => {

    return (
        <div class="album py-5 bg-body-tertiary">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                    <div class="col">
                        <Card imageUrl="https://materiageek.com/wp-content/uploads/2022/12/Estos-memes-de-Android-alegraran-tu-dia.jpg"></Card>
                    </div>
                    <div class="col">
                        <Card imageUrl="https://s1.elespanol.com/2016/09/27/ciencia/tecnologia/tecnologia_158745409_17463576_1706x1280.jpg"></Card>
                    </div>
                    <div class="col">
                        <Card imageUrl="https://i.pinimg.com/736x/52/79/69/52796911865e118118f45c68417bbde6.jpg"></Card>
                    </div>
                    <div class="col">
                        <Card imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc-8pBw5_nzb4ATuAc8DULDCI4Ob5aUTm73UxmNEg9D07L7ckeuq1CPhjlc9s-0Xc8ODM&usqp=CAU"></Card>
                    </div>
                  
                </div>
            </div>
        </div>

    )
}

export default Gallery;