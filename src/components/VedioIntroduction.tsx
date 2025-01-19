
import YoutubeLogo from "../assets/youtubeLogo.png"
import { LightbulbIcon, MessageCircleIcon } from 'lucide-react'
import VedioUserImg from "../assets/vedio-img.png"
import Background from "../assets/vedioUserBG.png"
const VideoIntroduction = () => {
  return (
    <div className="bg-[#1C4670] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="text-white max-w-xl">
          <h2 className="text-3xl font-bold mb-4">Our Video Introductions</h2>
          <p className="text-gray-300 mb-8">
            Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt apis dui.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
            <div className="bg-[#FFA229] p-3 rounded-full">
                <LightbulbIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Explore ideas together</h3>
                <p className="text-gray-300">
                  Engage audience segments and finally create actionable insights. Amplify vertical integration.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#FFA229] p-3 rounded-full">
                <MessageCircleIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-xl mb-2">Bring those ideas to life</h3>
                <p className="text-gray-300">
                  Engage audience segments and finally create actionable insights. Amplify vertical integration.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-auto">
          <div className="relative aspect-video w-full max-w-2xl rounded-lg overflow-hidden shadow-xl">
            <img
              src={VedioUserImg}
              alt="Video thumbnail"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center">
             <img src={YoutubeLogo} alt='youtubeLogo' />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
             <img src={Background} alt='background' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoIntroduction

