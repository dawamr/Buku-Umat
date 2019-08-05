const book = (sequelize, DataType) => {
    const Book = sequelize.difine('book',{
        judul: DataType.STRING,
    });
    Book.associate = models => {
        Book.belongsTo(models.User);
    }
    return Book
}
export default book;