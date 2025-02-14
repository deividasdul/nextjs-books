import {
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  CardContent,
  Button,
  Typography,
  Stack,
  Divider,
} from "@mui/material";
import Link from "next/link";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/books");
  const books = await response.json();

  return (
    <Stack gap={4} width={"50%"}>
      {books.map((book) => {
        return (
          <Card key={book.id} sx={{ p: 4, m: 4 }} elevation={12}>
            <CardHeader title={book.title} subheader={book.author} />
            <Divider />
            <CardContent>{book.description}</CardContent>
            <CardMedia
              sx={{ height: 512, width: 512 }}
              image={`https://covers.openlibrary.org/b/isbn/${book.isbn}-L.jpg`}
            />
            <Divider sx={{ p: 2 }} />
            <CardActions>
              <Typography sx={{ flex: 1 }}>
                Rating: {book.rating}
                <Stack direction={"row"}>
                  {[...Array(Math.floor(book.rating)).keys()].map((key) => {
                    return <StarIcon color="warning" />;
                  })}

                  {[...Array(Math.floor(6 - book.rating)).keys()].map((key) => {
                    return <StarBorderIcon color="warning" />;
                  })}
                </Stack>
              </Typography>
              <Button variant="contained" color="warning" sx={{ p: 2 }}>
                <Link href={`/book/${book.id}`}>Learn more</Link>
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </Stack>
  );
}
