const columns = [
    {
      title: 'Маршрут',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <p>{text}</p>,
    },
  
    {
      title: 'Точка A',
      dataIndex: 'pointa',
      key: 'pointa',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Точка В',
      key: 'pointb',
      dataIndex: 'pointb',
      render: (text) => <p>{text}</p>,
    },
    {
      title: 'Точка С',
      key: 'pointc',
      dataIndex: 'pointc',
      render: (text) => <p>{text}</p>,
    },
  ];

  export default columns