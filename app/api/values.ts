type Value = {
  id: number;
  job: string;
  human_relations: string;
  growth: string;
  leisure_time: string;
};

const fetchValues = async (): Promise<Value[]> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/values`
    );
    if (!response.ok) {
      throw new Error('データの取得に失敗しました');
    }
    const data: Value[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};
const handleCreateValue = async (event: React.FormEvent) => {
  event.preventDefault();
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/values`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (response.ok) {
      const createdValue: Value = await response.json();
      return createdValue;
    } else {
      throw new Error('データの作成に失敗しました');
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const handleUpdateValue = async (
  id: number,
  updatedData: Partial<Value>
): Promise<Value | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/values/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedData),
      }
    );

    if (response.ok) {
      const updatedValue: Value = await response.json();
      return updatedValue;
    } else {
      throw new Error('データの更新に失敗しました');
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const handleDeleteValue = async (id: number): Promise<boolean> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/values/${id}`,
      {
        method: 'DELETE',
      }
    );

    if (response.ok) {
      return true;
    } else {
      throw new Error('データの削除に失敗しました');
    }
  } catch (error) {
    console.error(error);
    return false;
  }
};
export { fetchValues, handleCreateValue, handleUpdateValue, handleDeleteValue };
