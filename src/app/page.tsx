import BirthdayWish from "./components/birthday-wish";

export default function Home() {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://wallpapers.com/images/hd/blue-birthday-background-1920-x-1080-rwsklmo3gfo2avfb.jpg')",
      }}
    >
      <BirthdayWish />
    </div>
  );
}
