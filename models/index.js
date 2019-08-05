import Sequelize from 'sequelize';

const sequelize = new Sequelize(
    process.env.DATABASE = buku_umat,
    process.env.DATABASE_USER =postgres,
    process.env.DATABASE_PASSWORD =postgres,
    {
        dialect: 'postgresql'
    },
);

const models = {
    User : sequelize.import('./userModel'),
    Book : sequelize.import('./bookModel'),
};

Object.keys(models).forEach(key=>{
    if('associate' in models[key]) {
        models[key].associate(models);
    }
});

export { sequelize }
export default models