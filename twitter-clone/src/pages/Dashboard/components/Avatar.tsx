export default function Avatar({ name }: { name: string }) {
  const initials = name.split(' ').join().slice(0, 2).toUpperCase();

  return (
    <div className="min-w-14 min-h-14 size-14 text-2xl rounded-full flex justify-center items-center bg-gray-200">
      {initials}
    </div>
  );
}
