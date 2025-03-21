export function BackgroundMusic({ videoId }: { videoId: string }) {
  return (
    <iframe
      className="w-full h-[30rem]"
      src={`https://www.youtube.com/embed/${videoId}?loop=1`}
    ></iframe>
  );
}
