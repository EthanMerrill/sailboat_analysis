import Image from 'next/image';
import { useEffect, useState } from 'react';

function BlurImage( image ) {
    const [isLoading, setLoading] = useState(true);
    console.log(image)

    function cn(...classes) {
        return classes.filter(Boolean).join(' ');
    }

    return (
        <a href={image.image.href} className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <Image
                    loader={() => image.image.href}
                    alt={image.image.alt}
                    src={image.image.src}
                    layout="fill"
                    objectFit="cover"
                    width="300"
                    // className={cn(
                    //     'group-hover:opacity-75 duration-700 ease-in-out',
                    //     isLoading
                    //         ? 'grayscale blur-2xl scale-110'
                    //         : 'grayscale-0 blur-0 scale-100'
                    // )}
                    onLoadingComplete={() => setLoading(false)}
                />
            </div>
        </a>
    );
}

export default BlurImage