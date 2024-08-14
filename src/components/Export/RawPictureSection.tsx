import EmptyHorizontal from '../../assets/EmptyHorizontal.png';

export default function RawPictureSection() {
  return (
    <div>
      <p className="text-lg font-bold">Raw Picture</p>
      <div className="w-7/12">
        <img src={EmptyHorizontal} />
      </div>
    </div>
  );
}
