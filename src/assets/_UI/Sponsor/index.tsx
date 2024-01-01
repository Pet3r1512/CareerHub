export default function Sponsor() {
  const brands = [
    "https://jlehnhviqykpbhjqjzmp.supabase.co/storage/v1/object/sign/Static%20Images/Sponsors/Nestle.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdGF0aWMgSW1hZ2VzL1Nwb25zb3JzL05lc3RsZS5wbmciLCJpYXQiOjE3MDQxMTY2MzIsImV4cCI6MTczNTY1MjYzMn0.o_qlCmvVrVNqNaRgZrlR-MpjFxb5zt45ZaO0LvYp560&t=2024-01-01T13%3A43%3A51.388Z",
    "https://jlehnhviqykpbhjqjzmp.supabase.co/storage/v1/object/sign/Static%20Images/Sponsors/CharterSpectrum.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdGF0aWMgSW1hZ2VzL1Nwb25zb3JzL0NoYXJ0ZXJTcGVjdHJ1bS5wbmciLCJpYXQiOjE3MDQxMTY2NTQsImV4cCI6MTczNTY1MjY1NH0.TRjYzc8qf0Yi2nfHLDiMtgU8eXru4j7TxPXbgJHZBQw&t=2024-01-01T13%3A44%3A12.983Z",
    "https://jlehnhviqykpbhjqjzmp.supabase.co/storage/v1/object/sign/Static%20Images/Sponsors/xfinity.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdGF0aWMgSW1hZ2VzL1Nwb25zb3JzL3hmaW5pdHkucG5nIiwiaWF0IjoxNzA0MTE2Njc1LCJleHAiOjE3MzU2NTI2NzV9.jiVgv4T9rSQvbsrrFjWjFHStm4B44a_EIJa7fFUFVgg&t=2024-01-01T13%3A44%3A34.574Z",
    "https://jlehnhviqykpbhjqjzmp.supabase.co/storage/v1/object/sign/Static%20Images/Sponsors/GeneralElectric.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdGF0aWMgSW1hZ2VzL1Nwb25zb3JzL0dlbmVyYWxFbGVjdHJpYy5wbmciLCJpYXQiOjE3MDQxMTY3MzIsImV4cCI6MTczNTY1MjczMn0.R9Zmrom6NbzUjdNsrt3uq05ZZmSPgYkGkWBceAMlgVg&t=2024-01-01T13%3A45%3A31.942Z",
    "https://jlehnhviqykpbhjqjzmp.supabase.co/storage/v1/object/sign/Static%20Images/Sponsors/Oracle.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdGF0aWMgSW1hZ2VzL1Nwb25zb3JzL09yYWNsZS5wbmciLCJpYXQiOjE3MDQxMTY2OTgsImV4cCI6MTczNTY1MjY5OH0.T6VmDfnxb6tojV3s4qYj7WiFidLpTpXEjgvgqxiIf_o&t=2024-01-01T13%3A44%3A57.416Z",
    "https://jlehnhviqykpbhjqjzmp.supabase.co/storage/v1/object/sign/Static%20Images/Sponsors/Tencent.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdGF0aWMgSW1hZ2VzL1Nwb25zb3JzL1RlbmNlbnQucG5nIiwiaWF0IjoxNzA0MTE2NzA4LCJleHAiOjE3MzU2NTI3MDh9.Ud7fXfWKpX6qM2AoQaEmD-Rm8JMr89auEQLsW2evDQQ&t=2024-01-01T13%3A45%3A07.804Z",
    "https://jlehnhviqykpbhjqjzmp.supabase.co/storage/v1/object/sign/Static%20Images/Sponsors/Tesla.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJTdGF0aWMgSW1hZ2VzL1Nwb25zb3JzL1Rlc2xhLnBuZyIsImlhdCI6MTcwNDExNjY4NiwiZXhwIjoxNzM1NjUyNjg2fQ.3YrEexkRrAaJyZGmtUnv3KjpTsdu35SobW2vW_31iu8&t=2024-01-01T13%3A44%3A45.881Z",
  ];
  return (
    <section
      className="flex items-center justify-center gap-x-6 lg:gap-x-16 h-[120px] w-max overflow-hidden 
    lg:animate-none animate-infinite-scroll mx-auto 
    right-0"
    >
      {brands.map((brand, index) => {
        return (
          <div className="!h-[20px] lg:h-fit" key={index}>
            <img src={brand} alt="" className="h-full" />
          </div>
        );
      })}
    </section>
  );
}
