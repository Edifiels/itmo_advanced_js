import React, { useState } from 'react';
import styles from './BookForm.module.css';

const BookForm = ({ addBook }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState(2000);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && author && year > 0) {
            addBook(title, author, year);
            setTitle('');
            setAuthor('');
            setYear(0);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.bookForm}>
            <input
                type="text"
                placeholder="Название книги"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={styles.input}
            />
            <input
                type="text"
                placeholder="Автор"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className={styles.input}
            />
            <input
                type="number"
                placeholder="Год издания"
                value={year}
                onChange={(e) => setYear(parseInt(e.target.value))}
                className={styles.input}
            />
            <button type="submit" className={styles.addButton}>Добавить книгу</button>
        </form>
    );
};

export default BookForm;