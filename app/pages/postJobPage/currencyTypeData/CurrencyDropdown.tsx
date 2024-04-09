interface CurrencyDropdownProps {
  selectedCurrency: string;
  onCurrencyChange: (code: string) => void;
}

const CurrencyDropdown: React.FC<CurrencyDropdownProps> = ({
  selectedCurrency,
  onCurrencyChange,
}) => {
  const currencies = [
    { code: "USD", label: "United States Dollar (USD)" },
    { code: "EUR", label: "Euro (EUR)" },
    { code: "JPY", label: "Japanese Yen (JPY)" },
    { code: "GBP", label: "British Pound Sterling (GBP)" },
    { code: "AUD", label: "Australian Dollar (AUD)" },
    { code: "CAD", label: "Canadian Dollar (CAD)" },
    { code: "CHF", label: "Swiss Franc (CHF)" },
    { code: "CNY", label: "Chinese Yuan (CNY)" },
    { code: "SEK", label: "Swedish Krona (SEK)" },
    { code: "NZD", label: "New Zealand Dollar (NZD)" },
  ];

  return (
    <select
      id="currency"
      value={selectedCurrency}
      onChange={(event) => onCurrencyChange(event.target.value)}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
    >
      <option className="" value="">
        Select a currency
      </option>
      {currencies.map((currency) => (
        <option key={currency.code} value={currency.code}>
          {currency.label}
        </option>
      ))}
    </select>
  );
};

export default CurrencyDropdown;
