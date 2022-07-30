var pool = require('./bd');

async function getNovedades(){
    var query= 'select * from newproducts';
    var rows = await pool.query(query);
    return rows;
}


module.exports = {getNovedades}