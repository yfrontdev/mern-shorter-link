import React from 'react';
import { Link } from 'react-router-dom';

export const ListLinks = ({links = []}) => {
  if (!links.length) {
    return <p className="center">Ссылок пока нет</p>
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Оригинальная</th>
            <th>Сокращенная</th>
            <th>Открыть</th>
          </tr>
        </thead>

        <tbody>
          { links.map((link, idx) => {
            return (
              <tr key={link._id}>
                <td>{idx + 1}</td>
                <td>{link.from}</td>
                <td>{link.to}</td>
                <td><Link to={`/detail/${link._id}`} >Детали</Link></td>
              </tr>
            )})
          }
        </tbody>
      </table>
    </div>
  );
};