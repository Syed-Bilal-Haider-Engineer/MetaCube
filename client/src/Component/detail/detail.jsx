import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/system";
import { Button, Card, IconButton, Stack, Typography } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Details() {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={5} p={3}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              borderRadius: "15px",
              width: "100%",
              height: "100%",
              minHeight: "500px",
              backgroundImage: `url(https://static-01.daraz.pk/p/5be8532143f7ba9e88f43671db5b8faa.jpg)`,
              backgroundSize: "contained",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <IconButton sx={{ border: 1 }}>
                <ArrowBackIcon sx={{ color: "#000000" }} fontSize="small" />
              </IconButton>
              <IconButton sx={{ border: 1 }}>
                <ShareIcon sx={{ color: "#000000" }} fontSize="small" />
              </IconButton>
            </Stack>
            <Typography variant="h3" py={3}>
              Butterfly Princess
            </Typography>
            <Typography color="text.secondary" variant="body2" py={1}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Obcaecati possimus deserunt id libero corrupti quis quae ipsum
              eius vero nisi soluta omnis eveniet voluptas, unde quasi labore?
              Adipisci, consequatur similique. unde quasi labore? Adipisci,
              consequatur similique. unde quasi labore?
            </Typography>
            <Grid item container xs={12} py={4}>
              <Grid item xs={6} md={4}>
                <Typography color="text.secondary" sx={{ fontSize: "16px" }}>
                  Current Price
                </Typography>
                <Typography sx={{ fontSize: "18px", fontWeight: "600" }}>
                  2.4
                </Typography>
              </Grid>
              <Grid item xs={6} md={8}>
                <Button
                  variant="contained"
                  sx={{
                    width: "100%",
                    backgroundColor: "black",
                    color: "white",
                    textTransform: "none",
                    borderRadius: "14px",
                    py: 1.5,
                  }}
                >
                  Buy now
                </Button>
              </Grid>
            </Grid>
            <Card sx={{ p: 2 }}>
              <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
                Attributes
              </Typography>
              <Grid item container xs={12} spacing={2} pt={2}>
                <Grid item xs={12} sm={4}>
                  <Box
                    p={2}
                    sx={{ backgroundColor: "#F8F8F8", borderRadius: "10px" }}
                  >
                    <Typography
                      color="text.secondary"
                      sx={{ textTransform: "uppercase", fontSize: "11px" }}
                    >
                      background
                    </Typography>
                    <Typography sx={{ fontSize: "12px", pt: 1 }}>
                      bg-plain-granite...
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box
                    p={2}
                    sx={{ backgroundColor: "#F8F8F8", borderRadius: "10px" }}
                  >
                    <Typography
                      color="text.secondary"
                      sx={{ textTransform: "uppercase", fontSize: "11px" }}
                    >
                      level
                    </Typography>
                    <Typography sx={{ fontSize: "12px", pt: 1 }}>
                      level 99
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Box
                    p={2}
                    sx={{ backgroundColor: "#F8F8F8", borderRadius: "10px" }}
                  >
                    <Typography
                      color="text.secondary"
                      sx={{ textTransform: "uppercase", fontSize: "11px" }}
                    >
                      body
                    </Typography>
                    <Typography sx={{ fontSize: "12px", pt: 1 }}>
                      Grey Crawler
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
