import EmptyHorizontal from '../../assets/EmptyHorizontal.png';

export default function PictureSection() {
  return (
    <div className="flex flex-col gap-3">
      <h3 className=" text-lg font-bold">Picture</h3>
      <div className="w-7/12">
        <img src={EmptyHorizontal} />
      </div>
      <div className="flex gap-5">
        <h3>Dimensions:</h3>
        <p>
          Length: <span>7135mm</span>
        </p>

        <p>
          Width: <span>7135mm</span>
        </p>
      </div>
    </div>
  );
}
