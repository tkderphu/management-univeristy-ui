import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

function ChangePasswordComponent() {
    document.title = "Đổi mật khẩu"


    // const handleChange = (oldPass, newPass) => {
    //     AuthenService.changePassword(oldPass, newPass)
    //         .then((res) => {
    //             AuthenService.logout()
    //                 .then(res1 =>
    //                 {
    //                     window.localStorage.removeItem('data');
    //                     window.location.pathname="/trang-chu"
    //                 })
    //                 .catch(err1 => console.log(err1))
    //         }).catch(err => alert("Mật khẩu cũ không hợp lệ"))
    // }
    const handleSubmit = (event: any) => {
        // event.preventDefault();
        const data = new FormData(event.currentTarget);
        // handleChange(data.get("old_password"), data.get("new_password"))

    };
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Đổi mật khẩu
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="old_password"
                        label="Mật khẩu cũ"
                        name="old_password"
                        autoComplete="password"
                        type={"password"}
                        autoFocus
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="new_password"
                        label="Mật khẩu mới"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Đổi mật khẩu
                    </Button>
                </Box>
            </Box>
        </Container>
    )


}
export default ChangePasswordComponent;
