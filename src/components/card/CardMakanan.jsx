const CardMakanan = ({ data }) => {
  return (
    <div className="cardMenu ">
      <img className="image radius-3" src={data.gambar_makanan} alt=""></img>
      <p className="nameCard">{data.nama_makanan}</p>
      <p className="priceMenu">{`Rp. ${data.harga_makanan}`}</p>
    </div>
  );
};

export default CardMakanan;
