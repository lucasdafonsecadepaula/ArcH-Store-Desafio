import { ProductsContext } from '@/context/Products';
import { Product } from '@/models/Product';
import { useContext, useState } from 'react';
import { Button } from '../Button';
import { SearchInput } from '../SearchInput';
import { Container, ImageWrapper } from './styles';

type EditProductProps = Product & { closeModal: () => void };

export function EditProduct({ closeModal, ...product }: EditProductProps) {
  const { title, description, thumbnail, price } = product;
  const { editProduct, removeProduct } = useContext(ProductsContext);
  const [titleInputValue, setTitleInputValue] = useState(title);
  const [descriptionInputValue, setDescriptionInputValue] =
    useState(description);
  const [thumbnailInputValue, setThumbnailInputValue] = useState(thumbnail);
  const [priceInputValue, setPriceInputValue] = useState<string | number>(
    price
  );

  const handleSaveEdit = () => {
    editProduct({
      ...product,
      title: titleInputValue,
      description: descriptionInputValue,
      thumbnail: thumbnailInputValue,
      price: Number(priceInputValue),
    });
    closeModal();
  };

  const handleRemove = () => {
    removeProduct(product);
    closeModal();
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      if (e?.target?.result && typeof e.target.result === 'string') {
        setThumbnailInputValue(e.target.result);
      }
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <Container>
      <div className="header">
        <h1>Editar Produto</h1>
      </div>
      <input
        accept="image/*"
        type="file"
        id="upload-image"
        hidden
        onChange={handleChangeImage}
      />
      <label className="file-label" htmlFor="upload-image">
        Clique na imagem para alterar
        <ImageWrapper>
          <img src={thumbnailInputValue} />
        </ImageWrapper>
      </label>

      <div>
        <label>Nome do produto</label>
        <SearchInput
          value={titleInputValue}
          onChange={(e) => setTitleInputValue(e.target.value)}
          placeholder=""
        />
      </div>
      <div>
        <label>Descrição</label>
        <SearchInput
          value={descriptionInputValue}
          onChange={(e) => setDescriptionInputValue(e.target.value)}
          placeholder=""
        />
      </div>
      <div>
        <label>Preço</label>
        <SearchInput
          type="number"
          value={priceInputValue}
          onChange={(e) => setPriceInputValue(e.target.value)}
          placeholder=""
        />
      </div>
      <div className="buttons">
        <Button variant="danger" onClick={handleRemove}>
          Remover
        </Button>
        <Button onClick={handleSaveEdit}>Salvar</Button>
      </div>
    </Container>
  );
}
