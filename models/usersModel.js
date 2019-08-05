const user = (sequelize, DataType) =>{
    const User = sequelize.define('user',{
        nama :{
            type: DataType.STRING,
        },
    });
    User.associate = models => {
        User.hasMany(models.Book,{onDelete: 'CASCADE'});
    }

    return User
}

export default users;