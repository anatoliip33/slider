class Photo < ActiveRecord::Base
  belongs_to :slide

  has_attached_file :image,
      :path => ":rails_root/public/images/:id/:filename",
      :url  => "/images/:id/:filename"

  do_not_validate_attachment_file_type :image
  # validates_attachment_content_type :image, content_type: ["image/jpg", "image/jpeg", "image/gif", "image/png"]

end
