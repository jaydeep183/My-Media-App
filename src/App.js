import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import {Navbar, InitialFeed, ChannelDetail, VideoDetail, SearchFeed} from "./comonents";

const App = () => (
    <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
        <Navbar />
        <Routes>
            <Route exact path='/' element={<InitialFeed />} />
            <Route path='/video/:id' element={<VideoDetail />} />
            <Route path='/channel/:id' element={<ChannelDetail />} />
            <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
    </Box>
    </BrowserRouter>
);

export default App