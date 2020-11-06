import React from 'react'
import ContentLoader from 'react-content-loader'

function PizzaLoadingBlock() {
    return (
        <ContentLoader
            className="pizza-block"
            speed={2}
            width={278}
            height={462}
            viewBox="0 0 278 462"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
        >
            <circle cx="134" cy="138" r="130" />
            <rect x="7" y="292" rx="0" ry="0" width="281" height="24" />
            <rect x="1" y="326" rx="35" ry="35" width="280" height="85" />
            <rect x="8" y="425" rx="0" ry="0" width="88" height="28" />
            <rect x="140" y="417" rx="31" ry="31" width="131" height="42" />
        </ContentLoader>
    )
}

export default PizzaLoadingBlock
