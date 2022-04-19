export const handleError = (
  inputName: string | undefined,
  inputPassword: string | undefined,
  setError: React.Dispatch<React.SetStateAction<string>>
) => {
  if (!inputName || !inputPassword) {
    setError("Enter name and password");
  } else return null;
};
