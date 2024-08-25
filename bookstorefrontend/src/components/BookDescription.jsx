import React from 'react';
import { useParams } from 'react-router-dom';


function BookDescription() {
    const { id } = useParams();
    const book = list.find(book => book.id === id);

    if (!book) {
        return <p>Book not found</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">{book.name}</h1>
            <img
                src={book.image}
                alt={book.name}
                className="w-full h-48 object-cover rounded-lg"
            />
            <p className="mt-4">{book.description}</p>
        </div>
    );
}

export default BookDescription;