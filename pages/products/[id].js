import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const docRef = doc(db, 'products', id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct(docSnap.data());
        }
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8">{product.title}</h1>
        <div className="flex">
          <img src={product.mainImage} alt={product.title} className="w-1/2" />
          <div className="ml-4">
            <p className="text-2xl font-semibold">{product.description}</p>
            <p className="text-xl mt-2">${product.price}</p>
            <div className="mt-4">
              {product.otherImages && product.otherImages.map((image, index) => (
                <img key={index} src={image} alt={`${product.title} ${index}`} className="w-1/4 mx-1" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
