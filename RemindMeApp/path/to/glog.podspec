require File.join('react-native', 'scripts', 'react_native_pods')

Pod::Spec.new do |s|
  s.name = 'glog'
  s.version = '0.3.5'
  s.dependency 'Folly', '>= 2018.10.22.00'
  s.dependency 'gflags', '>= 2.2.2'

  # Point to the path where the headers are installed
  s.header_dir = 'glog'
  s.source_files = 'src/**/*'

  xcode_path = `xcode-select --print-path`.strip
  match = xcode_path.match(/Xcode (\d+)\.(\d+)/)
  if match
    major_version = match[1].to_i
    minor_version = match[2].to_i
  else
    major_version = 0
    minor_version = 0
  end

  s.pod_target_xcconfig = {
    'HEADER_SEARCH_PATHS' => "$(inherited) #{s.header_dir}",
    'CLANG_MODULES_AUTOLINK' => 'NO',
    'GCC_PREPROCESSOR_DEFINITIONS' => "MAJOR_VERSION=#{major_version} MINOR_VERSION=#{minor_version}"
  }
end