import EmptyHorizontal from '../../assets/EmptyHorizontal.png';

export default function CroppedPictureSection() {
  return (
    <div>
      <p className="text-lg font-bold">Cropped Picture</p>
      <div className="w-7/12">
        <img src={EmptyHorizontal} />
      </div>
    </div>
  );
}
