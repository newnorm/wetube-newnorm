<<<<<<< HEAD
export const home = (req, res) => res.render("Home");
=======
export const home = (req, res) => res.send("Home");
>>>>>>> 412d39938197fe09746aa5e41387b0d9decf5219
export const search = (req, res) => res.send("Search");
export const videos = (req, res) => res.send("Videos");
export const upload = (req, res) => res.send("Upload");
export const videoDetail = (req, res) => res.send("Video Detail");
export const editVideo = (req, res) => res.send("Edit Video");
export const deleteVideo = (req, res) => res.send("Delete Video");


