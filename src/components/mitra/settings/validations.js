export default function Validation({ formData }) {
  const errors = {};

  if (formData.npwp === "4") {
    errors.npwp = "Harap Mengisi nomor NPWP dalam verifikasi akun";
  }

  return errors;
}
