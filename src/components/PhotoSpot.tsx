import { useRef, useState } from 'react';
import { Camera, Check } from 'lucide-react';
import { supabase, PHOTO_BUCKET, type GrachtenUser } from '@/lib/supabase';

type PhotoSpotProps = {
  spotIndex: number;
  label: string;
  detail: string;
  user: GrachtenUser;
  existingPhotoUrl: string | null;
  onUploaded: (url: string) => void;
};

export default function PhotoSpot({
  spotIndex,
  label,
  detail,
  user,
  existingPhotoUrl,
  onUploaded,
}: PhotoSpotProps) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [photoUrl, setPhotoUrl] = useState<string | null>(existingPhotoUrl);
  const [showDetail, setShowDetail] = useState(false);

  const handleFile = async (file: File) => {
    setUploading(true);
    try {
      const ext = file.name.split('.').pop() || 'jpg';
      const path = `${user.id}/spot_${spotIndex}.${ext}`;

      if (existingPhotoUrl) {
        const oldPath = `${user.id}/spot_${spotIndex}`;
        await supabase.storage.from(PHOTO_BUCKET).remove([oldPath]);
      }

      const { error: upErr } = await supabase.storage
        .from(PHOTO_BUCKET)
        .upload(path, file, { upsert: true });

      if (upErr) throw upErr;

      const { data: urlData } = supabase.storage
        .from(PHOTO_BUCKET)
        .getPublicUrl(path);

      const url = urlData.publicUrl + '?t=' + Date.now();

      await supabase
        .from('grachten_photos')
        .upsert({
          user_id: user.id,
          spot_index: spotIndex,
          storage_path: path,
        }, { onConflict: 'user_id,spot_index' });

      setPhotoUrl(url);
      onUploaded(url);
      setShowDetail(true);
    } catch (err) {
      console.error('Upload failed:', err);
      alert('Upload fehlgeschlagen. Bitte versuche es erneut.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="bg-green-600 rounded-2xl px-3 py-2 self-start max-w-full">
        <p className="text-white text-xs font-medium truncate">{label}</p>
      </div>
      <div
        className="bg-green-600 rounded-2xl aspect-square flex items-center justify-center cursor-pointer overflow-hidden relative group transition-all hover:bg-green-500"
        onClick={() => !uploading && fileRef.current?.click()}
      >
        {uploading ? (
          <div className="w-8 h-8 border-3 border-tan-100 border-t-transparent rounded-full animate-spin" />
        ) : photoUrl ? (
          <>
            <img src={photoUrl} alt={label} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <Camera className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
            </div>
            <div className="absolute top-2 right-2 bg-green-700 rounded-full p-1">
              <Check className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
          </>
        ) : (
          <Camera className="w-10 h-10 text-white/70 group-hover:text-white transition-colors" strokeWidth={1.5} />
        )}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleFile(file);
            e.target.value = '';
          }}
        />
      </div>
      {showDetail && (
        <div className="bg-green-600 rounded-2xl px-3 py-2 animate-slide-in-left">
          <p className="text-white text-xs leading-relaxed">{detail}</p>
        </div>
      )}
    </div>
  );
}
