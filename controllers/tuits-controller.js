import posts from "./tuits/tuits.js";
let tuits = posts;

const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    tuits.unshift(newTuit);
    res.json(newTuit);

}

const findAllTuits = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const uT = req.body;
    const uid = req.params.tid;
    tuits = tuits.map(t => t._id === uid ? uT : t);
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const deleteid = req.params.tid;
    tuits = tuits.filter(tu => tu._id !== deleteid);
    res.sendStatus(200);
}

export default (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findAllTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}
