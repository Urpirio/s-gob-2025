
export const getStatusColor = (status) => {
    switch (status) {
      case 'Activa':
        return 'bg-blue-100 text-blue-800';
      case 'Fallido':
        return 'bg-red-100 text-red-800';
      case 'Procesado':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };