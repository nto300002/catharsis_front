'use client';
import React, { useState } from 'react';
import { InputForm } from '../../layout/InputForm';
import { InputRangeForm } from '../../layout/InputForm';
import SubmitButton from '../../layout/SubmitButton';
import Navigation from '../../layout/Navigation';
import { Graph } from './Graph';
import { handleCreateValue } from '@/app/api/values';

type Value = {
  id: number;
  job: string;
  human_relations: string;
  growth: string;
  leisure_time: string;
};

const ValueForm = () => {
  const [values, setValues] = useState<Value[]>();
  const [newJob, setNewJob] = useState('');
  const [newHumanRelations, setHumanRelations] = useState('');
  const [newGrowth, setNewGrowth] = useState('');
  const [newLeisureTime, setNewLeisureTime] = useState('');
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
          body: JSON.stringify({
            job: newJob,
            human_relations: newHumanRelations,
            growth: newGrowth,
            leisure_time: newLeisureTime,
          }),
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
  return (
    <div>
      <Navigation content="あなたの価値">
        <form onSubmit={handleCreateValue}>
          <InputForm id="job" name="job" type="text">
            仕事
          </InputForm>
          <InputForm id="human_relations" name="human_relations" type="text">
            人間関係
          </InputForm>
          <InputForm id="growth" name="growth" type="text">
            成長・健康
          </InputForm>
          <InputForm id="leisure_time" name="leisure_time" type="text">
            余暇
          </InputForm>
          <SubmitButton>回答する</SubmitButton>
        </form>
      </Navigation>
      <div className="mt-6 border-2 border-gray-300 p-4 mb-4 text-center rounded-xl bg-white"></div>

      <Navigation content="価値観に沿った生活ができたか">
        <h1 className="text-xl">価値観に沿った生活ができたかチェック</h1>

        <InputRangeForm
          id="job_num"
          name="job_num"
          type="range"
          min={1}
          max={10}
        >
          今日の評価：仕事
        </InputRangeForm>
        <InputRangeForm
          id="human_relations_num"
          name="human_relations_num"
          type="range"
          min={1}
          max={10}
        >
          今日の評価：人間関係
        </InputRangeForm>
        <InputRangeForm
          id="growth_num"
          name="growth_num"
          type="range"
          min={1}
          max={10}
        >
          今日の評価：成長・体調
        </InputRangeForm>
        <InputRangeForm
          id="leisure_time_num"
          name="leisure_time_num"
          type="range"
          min={1}
          max={10}
        >
          今日の評価：余暇時間
        </InputRangeForm>
        <SubmitButton>回答する</SubmitButton>
      </Navigation>
    </div>
  );
};

export default ValueForm;
