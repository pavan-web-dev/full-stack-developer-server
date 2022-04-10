import {createTuit, findAllTuits, updateTuit, deleteTuit} from './tuits/tuits-dao.js';

const createTuitC = async (req, res) => {
    const newTuit = req.body;
    const insertedTuit = await createTuit(newTuit)
    res.json(insertedTuit);

}

const findAllTuitsC = async (req, res) => {
    const tuits = await findAllTuits()
    res.json(tuits);
}

const updateTuitC = async (req, res) => {
    const uT = req.body;
    const uid = req.params.tid;
    const status = await updateTuit(uid, uT);
    if(status.acknowledged){
    res.sendStatus(200);
    }else{
        res.sendStatus(404)
    }
}

const deleteTuitC = async (req, res) => {
    const deleteid = req.params.tid;
    const status = await deleteTuit(deleteid);
    if(status.acknowledged){
    res.sendStatus(200);
    }else{
        res.sendStatus(404)
    }
}

export default (app) => {
 app.post('/api/tuits', createTuitC);
 app.get('/api/tuits', findAllTuitsC);
 app.put('/api/tuits/:tid', updateTuitC);
 app.delete('/api/tuits/:tid', deleteTuitC);
}
