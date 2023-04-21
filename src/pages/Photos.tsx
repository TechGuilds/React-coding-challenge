import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css'
import axios from 'axios';

interface Images {
    id: string;
    urls: {regular: string};
    alt_description: string;
}

const Photos = () => {
    const [photos, setPhotos] = useState<Images[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('https://api.unsplash.com/photos?client_id=F1qU7OKtqeb6hKysZRN5WRbfAf_D0n5mz9Xf-tIplSw&per_page=40');
            setPhotos(response.data);
        };
        fetchData();
    }, []);

    return (
        <>
            <div
                data-cy="photo-grid--comp"
                className={styles.grid}>
                {
                    photos.map(photo => (
                        <div key={photo.id} >
                            <Image
                                src={photo.urls.regular}
                                alt={photo.alt_description}
                                width="250"
                                height="250"
                                className={styles.images}
                                priority
                            />
                        </div>
                    ))
                }
            </div>
        </>
    );
};

export default Photos;
