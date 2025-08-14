import { motion, useReducedMotion } from 'framer-motion';
import { inViewMotion } from 'src/utils/motion';

import {
  Briefcase,
  Clock,
  Users,
  MapPin,
  DollarSign,
  Calendar,
  ArrowRight,
  Mail,
} from 'lucide-react';
import { useState } from 'react';

interface JobPosition {
  id: string;
  title: string;
  description: string;
  requirements: string[];
  benefits: string[];
  location: string;
  salary: string;
  type: string;
  experience: string;
}

const jobPositions: JobPosition[] = [
  {
    id: 'co-founder',
    title: '共同創辦人',
    description: '負責公司整體規劃、產品開發、市場推廣等。',
    requirements: [
      '對創新有想法',
      '對市場有敏銳度',
      '對學習有熱情',
      '對團隊有責任感',
      '對未來有遠見',
      '對自己有要求',
    ],
    benefits: ['彈性工作時間', '良好的團隊氣氛', '新創公司有無限可能'],
    location: '嘉義市 / 遠程',
    salary: '新創公司新資可討論',
    type: '全職 / 兼職',
    experience: '不限',
  },
];

const Join = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleJobClick = (job: JobPosition) => {
    setSelectedJob(job);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedJob(null);
  };

  const shouldReduceMotion = useReducedMotion();
  return (
    <div className='min-h-screen pb-24'>
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        className='min-h-screen max-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white text-center px-4 relative py-12 overflow-hidden'
      >
        <motion.h1
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          className='text-5xl md:text-7xl font-bold mb-8 text-gray-800'
        >
          加入我們
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className='text-lg text-gray-700 max-w-3xl mx-auto mb-4'
        >
          我們正在尋找充滿熱情的夥伴，一起打造最棒的技術社群。
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='text-lg text-gray-700 max-w-3xl mx-auto'
        >
          如果你也對此充滿熱忱，歡迎加入我們的團隊！
        </motion.p>

      </motion.section>

      <div className='max-w-4xl mx-auto'>
        <motion.div
          {...inViewMotion(!!shouldReduceMotion, { duration: 0.6 })}
          className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-12'
        >
          <motion.div
            {...inViewMotion(!!shouldReduceMotion, { duration: 0.5, delay: 0.1 })}
            className='text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100'
          >
            <div className='bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <Briefcase className='w-8 h-8 text-blue-600' />
            </div>
            <h3 className='font-bold mb-2'>工作環境</h3>
            <p className='text-gray-600'>開放、自由的工作氛圍</p>
          </motion.div>

          <motion.div
            {...inViewMotion(!!shouldReduceMotion, { duration: 0.5, delay: 0.2 })}
            className='text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100'
          >
            <div className='bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <Clock className='w-8 h-8 text-green-600' />
            </div>
            <h3 className='font-bold mb-2'>彈性時間</h3>
            <p className='text-gray-600'>自由安排工作時間</p>
          </motion.div>

          <motion.div
            {...inViewMotion(!!shouldReduceMotion, { duration: 0.5, delay: 0.3 })}
            className='text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100'
          >
            <div className='bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4'>
              <Users className='w-8 h-8 text-purple-600' />
            </div>
            <h3 className='font-bold mb-2'>團隊文化</h3>
            <p className='text-gray-600'>重視每個成員的想法</p>
          </motion.div>
        </motion.div>

        <motion.div
          {...inViewMotion(!!shouldReduceMotion, { duration: 0.6 })}
          className='bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12'
        >
          <h2 className='text-2xl font-bold mb-6'>目前職缺</h2>
          <div className='space-y-6'>
            {jobPositions.map((job, index) => (
              <motion.div
                key={job.id}
                {...inViewMotion(!!shouldReduceMotion, { duration: 0.5, delay: index * 0.1 })}
                className='p-6 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer'
                onClick={() => handleJobClick(job)}
              >
                <div className='flex justify-between items-start mb-4'>
                  <h3 className='text-xl font-bold text-gray-800'>
                    {job.title}
                  </h3>
                  <ArrowRight className='w-5 h-5 text-gray-400' />
                </div>
                <p className='text-gray-600 mb-4'>{job.description}</p>
                <div className='flex flex-wrap gap-4 text-sm text-gray-500'>
                  <span className='flex items-center'>
                    <MapPin className='w-4 h-4 mr-1' /> {job.location}
                  </span>
                  <span className='flex items-center'>
                    <DollarSign className='w-4 h-4 mr-1' /> {job.salary}
                  </span>
                  <span className='flex items-center'>
                    <Calendar className='w-4 h-4 mr-1' /> {job.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          {...inViewMotion(!!shouldReduceMotion, { duration: 0.6 })}
          className='text-center'
        >
          <p className='text-gray-600 mb-4'>
            沒有找到適合的職位？歡迎直接寄送履歷給我們！
          </p>
          <a
            href='mailto:jobs@hyjdevelop.com'
            className='inline-flex items-center bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium'
          >
            <Mail className='w-5 h-5 mr-2' />
            寄送履歷
          </a>
        </motion.div>
      </div>

      {/* 職缺詳情 Modal */}
      {showModal && selectedJob && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50'>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className='bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto'
          >
            <div className='p-6'>
              <div className='flex justify-between items-start mb-6'>
                <h2 className='text-2xl font-bold text-gray-800'>
                  {selectedJob.title}
                </h2>
                <button
                  onClick={closeModal}
                  className='text-gray-400 hover:text-gray-600 text-2xl font-bold'
                >
                  ×
                </button>
              </div>

              <div className='space-y-6'>
                <div>
                  <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                    職位描述
                  </h3>
                  <p className='text-gray-600'>{selectedJob.description}</p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                  <div>
                    <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                      工作地點
                    </h3>
                    <p className='text-gray-600 flex items-center'>
                      <MapPin className='w-4 h-4 mr-2' /> {selectedJob.location}
                    </p>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                      薪資範圍
                    </h3>
                    <p className='text-gray-600 flex items-center'>
                      <DollarSign className='w-4 h-4 mr-2' />{' '}
                      {selectedJob.salary}
                    </p>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                      工作類型
                    </h3>
                    <p className='text-gray-600 flex items-center'>
                      <Calendar className='w-4 h-4 mr-2' /> {selectedJob.type}
                    </p>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                      經驗要求
                    </h3>
                    <p className='text-gray-600'>{selectedJob.experience}</p>
                  </div>
                </div>

                <div>
                  <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                    職位要求
                  </h3>
                  <ul className='list-disc list-inside space-y-1 text-gray-600'>
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                    福利待遇
                  </h3>
                  <ul className='list-disc list-inside space-y-1 text-gray-600'>
                    {selectedJob.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>

                <div className='flex space-x-4 pt-4'>
                  <button
                    onClick={closeModal}
                    className='flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors'
                  >
                    關閉
                  </button>
                  <a
                    href={`mailto:jobs@hyjdevelop.com?subject=應徵職位：${selectedJob.title}`}
                    className='flex-1 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center'
                  >
                    立即應徵
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Join;
