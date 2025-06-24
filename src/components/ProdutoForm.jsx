import { TextField, Button, Stack, CircularProgress } from "@mui/material";

export default function FormProduto({
  produto,
  loading,
  onChange,
  onSubmit,
  onCancel,
}) {
  if (loading)
    return <CircularProgress sx={{ display: "block", mx: "auto", my: 4 }} />;

  return (
    <form onSubmit={onSubmit}>
      <Stack
        spacing={3}
        sx={{
          maxWidth: 500,
          mx: "auto",
          my: 4,
          p: 4,
          boxShadow: 3,
          borderRadius: 3,
          backgroundColor: "#f5f5f5",
        }}
      >
        <TextField
          label="Nome do Produto"
          name="nome"
          value={produto.nome}
          onChange={onChange}
          required
          fullWidth
          variant="outlined"
        />
        <TextField
          label="Preço"
          name="preco"
          type="number"
          value={produto.preco}
          onChange={onChange}
          required
          fullWidth
          variant="outlined"
          inputProps={{ step: "0.01", min: "0" }}
        />
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button type="submit" variant="contained" color="primary">
            Salvar
          </Button>
          <Button variant="outlined" color="secondary" onClick={onCancel}>
            Cancelar
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
