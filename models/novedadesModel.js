var pool = require('./bd');

async function getNovedades(){
    var query= 'select * from newproducts';
    var rows = await pool.query(query);
    return rows;
}

async function insertNovedades(obj){
    try{
        var query ='insert into newproducts set ?';
        var rows = await pool.query(query,[obj]);
        return rows;

    }catch (error){
        console.log(error);
        throw error;
    }
}

async function deleteNovedadByID(id){
    var query = 'delete from newproducts where id=?';
    var rows = await pool.query(query,[id]);
    return rows;
}

async function getNovedadesByID(id){
    var query = 'select * from newproducts where id=?';
    var rows = await pool.query(query,[id]);
    return rows[0];
}

async function modificarNovedadByID(obj,id){
    try{
        var query = 'update newproducts set ? where id=?'
        var rows = await pool.query(query,[obj,id]);
        return rows;
}catch(error){
    throw error;
}
}

module.exports = {getNovedades, insertNovedades, deleteNovedadByID, getNovedadesByID, modificarNovedadByID}