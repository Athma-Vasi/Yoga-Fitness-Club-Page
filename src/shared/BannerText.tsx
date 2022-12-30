type BannerTextProps = { children: string };

function BannerText({ children }: BannerTextProps) {
  return (
    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">{children}</h1>
  );
}

export default BannerText;
